'use strict';
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const {optimize} = require('svgo');
const dir = path.resolve(__dirname, '../source/images/favicon');
const original = fs.readFileSync(path.join(dir, 'logo.svg'), 'utf8');
const mark = original.match(/<g[\s\S]*<\/g>/)[0].replace('fill="#202222"', 'fill="currentColor"');
const svg = (radius = 36, scale = 1, adaptive = false) => optimize(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><style>:root{color:#f4f7f0}.tile{fill:#365448}${adaptive ? '@media(prefers-color-scheme:dark){:root{color:#243e32}.tile{fill:#dce9df}}' : ''}</style><rect class="tile" width="180" height="180" rx="${radius}"/><g transform="translate(90 90) scale(${scale}) translate(-90 -90)">${mark}</g></svg>`, {multipass:true}).data;
function ico(frames) {
 const header = Buffer.alloc(6 + frames.length * 16);header.writeUInt16LE(1,2);header.writeUInt16LE(frames.length,4);
 let offset=header.length;
 frames.forEach(({size,data},i)=>{const p=6+i*16;header[p]=size===256?0:size;header[p+1]=header[p];header.writeUInt16LE(1,p+4);header.writeUInt16LE(32,p+6);header.writeUInt32LE(data.length,p+8);header.writeUInt32LE(offset,p+12);offset+=data.length;});
 return Buffer.concat([header,...frames.map(f=>f.data)]);
}
(async()=>{
 fs.writeFileSync(path.join(dir,'favicon.svg'),svg(36,1,true));
 fs.writeFileSync(path.join(dir,'mask.svg'),optimize(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">${mark.replace('currentColor','#000')}</svg>`).data);
 const png=async(size,radius=36,scale=1)=>sharp(Buffer.from(svg(radius,scale))).resize(size,size).png({palette:true,colors:128,compressionLevel:9,effort:10}).toBuffer();
 for(const [name,size,radius,scale] of [
  ['favicon-16x16.png',16,36,1],['favicon-32x32.png',32,36,1],['apple-touch-icon.png',180,0,1],
  ['icon-192.png',192,0,1],['icon-512.png',512,0,1],['icon-maskable-512.png',512,0,.8]
 ])fs.writeFileSync(path.join(dir,name),await png(size,radius,scale));
 for(const [current,legacy] of [['favicon-16x16.png','favicon-16x16-next.png'],['favicon-32x32.png','favicon-32x32-next.png'],['apple-touch-icon.png','apple-touch-icon-next.png']]) fs.copyFileSync(path.join(dir,current),path.join(dir,legacy));
 const frames=[];for(const size of [16,32,48,64])frames.push({size,data:await png(size)});
 fs.writeFileSync(path.resolve(dir,'../../favicon.ico'),ico(frames));
 console.log('Built SVG, 16/32 PNG, Apple, 192/512 app, maskable and four-resolution ICO icons.');
})().catch(e=>{console.error(e);process.exitCode=1});
