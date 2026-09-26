// Mini-modèles faits avec les pièces de la photo « pièces en vrac ».
(function(){
const { brick, plate, tile, round2, wedge, curveLong } = LEGO;

const MODELS = {
  avion: {
    label: 'Avion (19 pièces)', center: [8, 48], view: {az:-40, el:28},
    steps: [
      {title:'Les moteurs et les ailes', az:-35, el:35,
       text:`Deux <b>briques 1x2 bleu moyen</b> (les moteurs), écartées de 6 tenons. Par-dessus, deux <b>plaques noires 2x6</b> bout à bout en travers : les ailes. Plus loin derrière, la <b>plaque jaune 2x4</b> (l'empennage) : pose-la, elle se fixera à l'étape suivante.`,
       pieces: [ brick(-3,2,0,1,2,'mdblue'), brick(4,2,0,1,2,'mdblue'),
                 plate(-5,2,3,6,2,'black'), plate(1,2,3,6,2,'black'), plate(-1,10,3,4,2,'yellow') ]},
      {title:'Le dessous du fuselage', az:-35, el:40,
       text:`La <b>plaque rouge 2x6</b> devant (elle relie les deux ailes) et la <b>plaque verte 2x6</b> derrière (elle tient l'empennage).`,
       pieces: [ plate(0,0,4,2,6,'red'), plate(0,6,4,2,6,'green') ]},
      {title:'Le fuselage et le nez', az:-40, el:30,
       text:`Devant, les deux <b>pentes biseautées</b> forment le nez pointu. Puis une <b>brique 1x2</b> en travers, la <b>brique 2x4 bleue</b> (à cheval sur les deux plaques) et la <b>brique 2x2 bleue</b>.`,
       pieces: [ wedge(0,0,5,'-y','gauche','blue'), wedge(1,0,5,'-y','droite','blue'),
                 brick(0,2,5,2,1,'mdblue'), brick(0,3,5,2,4,'blue'), brick(0,7,5,2,2,'blue') ]},
      {title:'Le cockpit et la dérive', az:-40, el:25,
       text:`La <b>tuile transparente</b> (le pare-brise) et la <b>tuile noire 2x4</b> sur le dos. À l'arrière, deux <b>briques rouges 1x2</b> empilées et les deux <b>pentes courbes violettes</b> : la dérive.`,
       pieces: [ tile(0,2,8,1,1,'trlblue'), tile(0,3,8,2,4,'black'),
                 brick(0,10,5,2,1,'red'), brick(0,10,8,2,1,'red'),
                 curveLong(0,10,11,'+y',2,'purple'), curveLong(1,10,11,'+y',2,'purple') ]},
    ],
  },
  fusee: {
    label: 'Fusée sur son pas de tir (20 pièces)', center: [8, 8], view: {az:-35, el:15},
    steps: [
      {title:'Le pas de tir', az:-35, el:45,
       text:`Trois plaques 2x6 côte à côte : <b>jaune</b>, <b>rouge</b>, <b>verte</b>. Par-dessus et en travers, trois <b>plaques noires 2x6</b> : elles verrouillent le tout.`,
       pieces: [ plate(-2,-2,0,2,6,'yellow'), plate(0,-2,0,2,6,'red'), plate(2,-2,0,2,6,'green'),
                 plate(-2,-2,1,6,2,'black'), plate(-2,0,1,6,2,'black'), plate(-2,2,1,6,2,'black') ]},
      {title:'Les ailerons', az:-35, el:35,
       text:`Au centre, la 4ᵉ <b>plaque noire 2x6</b> dans l'autre sens. De chaque côté, deux <b>pentes courbes 1x2</b> qui descendent vers l'extérieur : <b>violettes</b> à gauche, <b>bleu foncé</b> à droite.`,
       pieces: [ plate(0,-2,2,2,6,'black'),
                 curveLong(-2,0,2,'-x',2,'purple'), curveLong(-2,1,2,'-x',2,'purple'),
                 curveLong(2,0,2,'+x',2,'dkblue'), curveLong(2,1,2,'+x',2,'dkblue') ]},
      {title:'Le corps arc-en-ciel', az:-35, el:25,
       text:`Empile les plaques 2x4 en <b>alternant le sens</b> à chaque fois (une dans la longueur, une en travers) : <b>or</b>, <b>noire</b>, <b>gris-bleu</b>, <b>jaune</b>, <b>blanche</b>. Le corps de la fusée prend une forme de croix.`,
       pieces: [ plate(0,-1,3,2,4,'gold'), plate(-1,0,4,4,2,'black'), plate(0,-1,5,2,4,'sandblue'),
                 plate(-1,0,6,4,2,'yellow'), plate(0,-1,7,2,4,'white') ]},
      {title:'La coiffe', az:-35, el:18,
       text:`La <b>brique 2x2 bleue</b>, la <b>brique ronde</b>, puis les deux <b>pentes courbes vert sable</b> qui font la pointe.`,
       pieces: [ brick(0,0,8,2,2,'blue'), round2(0,0,11,3,'mdblue'),
                 curveLong(0,0,14,'-y',2,'sandgreen'), curveLong(1,0,14,'-y',2,'sandgreen') ]},
    ],
  },
  bateau: {
    label: 'Bateau (17 pièces)', center: [16, 32], view: {az:-40, el:25},
    steps: [
      {title:'La coque', az:-40, el:35,
       text:`Deux <b>plaques noires 2x6</b> côte à côte. Par-dessus et en travers, trois plaques 2x4 : <b>noire</b>, <b>or</b>, <b>gris-bleu</b>.`,
       pieces: [ plate(0,1,0,2,6,'black'), plate(2,1,0,2,6,'black'),
                 plate(0,1,1,4,2,'black'), plate(0,3,1,4,2,'gold'), plate(0,5,1,4,2,'sandblue') ]},
      {title:'La proue et le pont', az:-40, el:35,
       text:`Les deux <b>pentes biseautées</b> au centre devant : la proue pointue. Sur les bords, les deux <b>plaques marron 1x4</b> (les planches du pont) et au milieu la <b>plaque blanche 2x4</b>.`,
       pieces: [ wedge(1,0,2,'-y','gauche','blue'), wedge(2,0,2,'-y','droite','blue'),
                 plate(0,3,2,1,4,'brown'), plate(3,3,2,1,4,'brown'), plate(1,3,2,2,4,'white') ]},
      {title:'La cabine', az:-40, el:28,
       text:`Deux <b>briques 1x2 bleu moyen</b> en travers (les murs), la <b>tuile transparente</b> et la <b>plaque blanche 1x2</b> devant (le poste de pilotage), puis la <b>plaque bleue 2x3</b> en toit.`,
       pieces: [ brick(1,4,3,2,1,'mdblue'), brick(1,5,3,2,1,'mdblue'), tile(1,3,3,1,1,'trlblue'), plate(2,3,3,2,1,'white'),
                 plate(1,4,6,2,3,'blue') ]},
      {title:'La cheminée', az:-40, el:22,
       text:`Deux <b>briques rouges 1x2</b> empilées sur le toit : la cheminée.`,
       pieces: [ brick(1,5,7,1,2,'red'), brick(1,5,10,1,2,'red') ]},
    ],
  },
};

function miniVrac(opts = {}){
  const m = MODELS[opts.modele] || MODELS.avion;
  return { zoff:0, groups:{}, steps:m.steps, center:m.center, defaultPose:{}, controls:[],
           state: () => ({groundY:0}), info:{label:m.label, view:m.view} };
}
const VRAC_CHOICES = Object.entries(MODELS).map(([value,m]) => ({value, label:m.label}));

Object.assign(LEGO, {miniVrac, VRAC_CHOICES});
})();
