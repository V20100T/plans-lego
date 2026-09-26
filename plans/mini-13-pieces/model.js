// Mini-modèles faits uniquement avec les 13 pièces de la photo « mes pièces bleues ».
(function(){
const { brick, plate, tile, round2, bracket, wedge, curveLong, inGroup } = LEGO;

// Pièces posées sur la face à tenons d'une équerre (tenons vers -x ou +x).
// Repère local d'un sous-ensemble : construit tenons vers le haut, puis tourné pour que « le haut » regarde vers la face.
const faceMinusX = (fx,ty,tz) => new THREE.Matrix4().set(0,-1,0,fx,  1,0,0,ty, 0,0,1,tz, 0,0,0,1);
const facePlusX  = (fx,ty,tz) => new THREE.Matrix4().set(0, 1,0,fx, -1,0,0,ty, 0,0,1,tz, 0,0,0,1);
const snot = m => ({zoff:0, matrix: () => m});

const MODELS = {
  euc: {
    label: 'Mini gyroroue (5 pièces)',
    groups: { wheel: snot(faceMinusX(0,0,0)) },
    center: [0, 16], view: {az:-100, el:18},
    steps: [
      {title:'La coque et la roue', az:-120, el:20,
       text:`Accroche la <b>brique ronde 2x2</b> sur la face à 4 tenons de l'<b>équerre</b>, par-dessous : couchée sur le côté, elle devient la roue. Son côté rond se voit de profil, comme une vraie roue.`,
       pieces: [ bracket(0,0,4,'-x','dkblue'), ...inGroup([ round2(0,0,0,3,'mdblue') ], 'wheel') ]},
      {title:'Le dessus, le phare et le trolley', az:-130, el:30,
       text:`La <b>brique 2x2</b> sur le haut de l'équerre, à cheval au-dessus de la roue. Devant, la <b>tuile 1x1 transparente</b> fait le phare. La <b>tuile 1x6</b> dépasse à l'arrière : c'est le trolley déplié.`,
       tip:`Il te reste des pièces : ajoute les pentes courbes sur les côtés, ou la plaque noire en socle.`,
       pieces: [ brick(-1,0,5,2,2,'blue'), tile(-1,0,8,1,1,'trlblue'), tile(0,0,8,1,6,'blue') ]},
    ],
  },
  ship: {
    label: 'Petit vaisseau spatial (13 pièces)',
    groups: { finL: snot(faceMinusX(0,8,0)), finR: snot(facePlusX(16,16,0)) },
    center: [8, 16], view: {az:-40, el:25},
    steps: [
      {title:'Le réacteur et le train d\'atterrissage', az:-40, el:25,
       text:`La <b>brique ronde</b> (le réacteur) avec la <b>plaque noire 2x2</b> dessus, à l'arrière. Devant, les deux <b>équerres</b> côte à côte, tenons des faces vers l'extérieur : elles servent de pattes.`,
       pieces: [ round2(0,2,1,3,'mdblue'), plate(0,2,4,2,2,'black'), bracket(0,0,4,'-x','dkblue'), bracket(1,0,4,'+x','dkblue') ]},
      {title:'Le fuselage', az:-40, el:30,
       text:`La <b>brique 2x4</b> par-dessus : elle relie le réacteur et les équerres.`,
       pieces: [ brick(0,0,5,2,4,'blue') ]},
      {title:'Le nez et le cockpit', az:-35, el:35,
       text:`Les deux <b>pentes biseautées</b> devant (gauche + droite) forment le nez pointu. Derrière, la <b>brique 2x2</b> du cockpit.`,
       pieces: [ wedge(0,0,8,'-y','gauche','blue'), wedge(1,0,8,'-y','droite','blue'), brick(0,2,8,2,2,'blue') ]},
      {title:'Ailes, verrière et ailerons', az:-40, el:28,
       text:`La <b>tuile 1x6</b> en travers derrière le cockpit : les ailes. La <b>tuile 1x2</b> sur les pointes du nez, la <b>tuile transparente</b> devant le cockpit (la verrière). Enfin, une <b>pente courbe 1x4</b> sur la face de chaque équerre : les ailerons.`,
       pieces: [ tile(-2,3,11,6,1,'blue'), tile(0,1,11,2,1,'blue'), tile(0,2,11,1,1,'trlblue'),
                 ...inGroup([ curveLong(0,0,0,'-y',4,'blue') ], 'finL'), ...inGroup([ curveLong(0,0,0,'-y',4,'dkblue') ], 'finR') ]},
    ],
  },
  robot: {
    label: 'Mini robot (12 pièces)',
    groups: { armL: snot(faceMinusX(-8,8,-16)), armR: snot(facePlusX(24,16,-16)) },
    center: [8, 8], view: {az:-30, el:15},
    steps: [
      {title:'Les jambes et le torse', az:-30, el:25,
       text:`La <b>plaque noire 2x2</b> (les pieds), la <b>brique 2x2</b> (les jambes), puis la <b>brique 2x4</b> en travers : le torse, qui dépasse d'1 tenon de chaque côté.`,
       pieces: [ plate(0,0,1,2,2,'black'), brick(0,0,2,2,2,'blue'), brick(-1,0,5,4,2,'blue') ]},
      {title:'Les bras', az:-30, el:-10,
       text:`Retourne le robot : sous chaque bout du torse, clipse une <b>équerre</b>, la face à tenons vers l'extérieur. Elles pendent jusqu'au sol, un peu plus bas que les pieds : le robot s'appuie dessus comme un gorille.`,
       tip:`Vue de dessous. Les équerres doivent être sous la partie du torse qui dépasse des jambes, sinon leur face bute contre les jambes.`,
       pieces: [ bracket(-1,0,4,'-x','dkblue'), bracket(2,0,4,'+x','dkblue') ]},
      {title:'La tête et les épaulettes', az:-30, el:30,
       text:`La <b>brique ronde</b> au milieu du torse : la tête. Sur chaque bout du torse, une <b>pente biseautée</b> : les épaulettes.`,
       pieces: [ round2(0,0,8,3,'mdblue'), wedge(-1,0,8,'-y','gauche','blue'), wedge(2,0,8,'-y','droite','blue') ]},
      {title:'Les canons et le visage', az:-30, el:18,
       text:`Une <b>pente courbe 1x4</b> sur la rangée du haut de chaque équerre : les canons, qui pointent vers l'avant. Sur la tête, la <b>tuile transparente</b> (l'œil-scanner) et la <b>tuile 1x2</b> (la crête).`,
       tip:`Il te reste la tuile 1x6 : donne-la-lui comme épée ou comme bouclier.`,
       pieces: [ ...inGroup([ curveLong(0,0,0,'-y',4,'blue') ], 'armL'), ...inGroup([ curveLong(0,0,0,'-y',4,'dkblue') ], 'armR'),
                 tile(0,0,11,1,1,'trlblue'), tile(1,0,11,1,2,'blue') ]},
    ],
  },
};

function miniModels(opts = {}){
  const m = MODELS[opts.modele] || MODELS.euc;
  return {
    zoff: 0, groups: m.groups, steps: m.steps, center: m.center,
    defaultPose: {}, controls: [], state: () => ({groundY: 0}),
    info: {label: m.label},
  };
}
const MINI_CHOICES = Object.entries(MODELS).map(([value,m]) => ({value, label:m.label}));

Object.assign(LEGO, {miniModels, MINI_CHOICES});
})();
