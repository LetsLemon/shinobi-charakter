import assert from 'node:assert/strict';
import {newCharacter,recommend,validate,PATHS,CLANS,fitAttributes} from '../src/lib/model.mjs';
for(const main of Object.keys(PATHS))for(const clan of Object.keys(CLANS)){
 const c=recommend({...newCharacter(),name:'Test',main,clan});
 assert.deepEqual(validate(c),[],`${main}/${clan}`);
 assert.deepEqual(validate(fitAttributes(c)),[],`Attribute ${main}/${clan}`);
}
const c=recommend({...newCharacter(),name:'Test',clan:'Clanlos'});
assert(validate({...c,pathSkills:['unbekannt',...c.pathSkills.slice(1)]}).some(x=>x.includes('Wegliste')));
assert(validate({...c,pathSkills:[c.pathSkills[0],c.pathSkills[0],c.pathSkills[2]]}).some(x=>x.includes('doppeln')));
assert(validate({...c,extraJutsu:['j001']}).some(x=>x.includes('Weitere Techniken')));
assert(validate({...c,jutsu:{...c.jutsu,start1:c.jutsu.start0}}).some(x=>x.includes('mehrfach')));
assert(validate({...c,feats:[c.feats[0],c.feats[0]]}).some(x=>x.includes('Talent')));
assert(validate({...c,bonus:[c.bonus[0],c.bonus[0],c.bonus[2]]}).some(x=>x.includes('unterschiedliche')));
console.log('Creation checks passed: all main paths / clans and invalid selections.');
