import {build} from 'esbuild';
await build({entryPoints:['src/main.jsx'],bundle:true,minify:true,format:'iife',platform:'browser',jsx:'automatic',outfile:'docs/app.js',define:{'process.env.NODE_ENV':'"production"'},legalComments:'linked'});
