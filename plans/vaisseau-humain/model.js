// Vaisseau spatial construit à la main (photos « Construction humaine - Vaisseau spacial »), reconstitué couche par couche.
// Avant (nez en fourche) = y=0 ; arrière (aile en T) = y=13. Fuselage sur les colonnes x=0..1.
(function(){
const { brick, plate, tile, round2, bracket, wedge, curveLong, slope } = LEGO;

function vaisseauHumain(){
  const steps = [
    {title:'Les pieds', az:-40, el:35,
     text:`Une <b>brique blanche 2x4</b> à l'avant, et à l'arrière deux <b>briques 1x2 bleu ciel</b>, écartées de 8 tenons : ce sont les pieds du vaisseau.`,
     pieces: [ brick(0,2,0,2,4,'white'), brick(-4,11,0,1,2,'mdblue'), brick(5,11,0,1,2,'mdblue') ]},
    {title:'Le châssis et l\'aile arrière', az:-40, el:40,
     text:`Devant, la <b>plaque jaune 2x4</b> en travers et la <b>plaque jaune 2x6</b> dans la longueur, sur la brique blanche. Derrière, la <b>plaque grise</b> en travers, puis les deux <b>plaques noires 2x6</b> bout à bout sur les briques bleu ciel : la grande aile en T.`,
     pieces: [ plate(-1,2,3,4,2,'yellow'), plate(0,4,3,2,6,'yellow'),
               plate(-2,12,2,6,1,'ltgrey'), plate(-5,11,3,6,2,'black'), plate(1,11,3,6,2,'black') ]},
    {title:'Le dessous du fuselage et la fourche', az:-35, el:40,
     text:`La <b>plaque verte 2x6</b> devant et la <b>plaque rouge 2x6</b> derrière : la rouge relie l'aile au reste. Sur les bouts de la plaque jaune, les deux <b>plaques marron 1x4</b> qui dépassent vers l'avant : les deux branches de la fourche.`,
     pieces: [ plate(0,1,4,2,6,'green'), plate(0,7,4,2,6,'red'), plate(-1,0,4,1,4,'brown'), plate(2,0,4,1,4,'brown') ]},
    {title:'Les pointes et les ailerons', az:-35, el:30,
     text:`Au bout de chaque branche, une <b>pente biseautée bleue</b> (la gauche à gauche, la droite à droite), puis une <b>pente courbe vert sable</b> derrière. Sur l'aile arrière : une <b>pente courbe bleu foncé</b> à chaque bout, une <b>pente courbe violette</b> près du fuselage de chaque côté, et la <b>tuile bleue 1x4</b>.`,
     pieces: [ wedge(-1,0,5,'-y','gauche','blue'), wedge(2,0,5,'-y','droite','blue'),
               curveLong(-1,2,5,'-y',2,'sandgreen'), curveLong(2,2,5,'-y',2,'sandgreen'),
               curveLong(-2,11,4,'-x',2,'purple'), curveLong(3,11,4,'+x',2,'purple'),
               curveLong(-5,11,4,'-x',2,'dkblue'), curveLong(5,11,4,'+x',2,'dkblue'), tile(-4,12,4,4,1,'blue') ]},
    {title:'Le corps', az:-40, el:30,
     text:`Sur la plaque verte : la <b>brique bleue 2x2</b> devant, la <b>brique bleue 2x4</b> derrière, puis une <b>brique 1x2 bleu ciel</b> en travers.`,
     pieces: [ brick(0,1,5,2,2,'blue'), brick(0,3,5,2,4,'blue'), brick(0,7,5,2,1,'mdblue') ]},
    {title:'Le dos en gradins', az:-45, el:30,
     text:`La <b>plaque noire 2x2</b> devant, une <b>plaque noire 2x6</b> au milieu, puis la dernière <b>plaque noire 2x6</b> plus haut et décalée vers l'arrière. Elle dépasse au-dessus de l'aile, comme sur les photos de profil.`,
     pieces: [ plate(0,1,8,2,2,'black'), plate(0,3,8,2,6,'black'), plate(0,7,9,2,6,'black') ]},
    {title:'Le cockpit', az:-40, el:35,
     text:`Tout devant, la <b>pente dorée 2x2</b> sur la plaque noire : le pare-brise. Derrière, une <b>plaque rouge 1x2</b> et une <b>plaque blanche 1x2</b> en travers.`,
     pieces: [ slope(0,1,9,'-y',2,'gold'), plate(0,4,9,2,1,'red'), plate(0,5,9,2,1,'white') ]},
    {title:'Les équerres latérales', az:-60, el:15,
     text:`De chaque côté des petites plaques, une <b>équerre bleu foncé</b> : sa face à 4 tenons pend le long du flanc, tournée vers l'extérieur. Par-dessus, la <b>plaque noire 2x4</b> en travers les relie.`,
     tip:`Les équerres sont juste derrière la fourche : leur face doit descendre sans toucher les pentes vert sable.`,
     pieces: [ bracket(-1,4,9,'-x','dkblue'), bracket(2,4,9,'+x','dkblue'), plate(-1,4,10,4,2,'black') ]},
    {title:'Le haut du nez', az:-35, el:30,
     text:`Deux <b>briques rouges 1x2</b> sur les bouts de la plaque noire, la <b>tuile transparente</b> et la <b>tuile rouge 1x2</b> entre elles. Sur les briques rouges, les deux <b>pentes courbes 1x4</b> (bleue à gauche, bleu foncé à droite), qui dépassent devant et derrière.`,
     pieces: [ brick(-1,4,11,1,2,'red'), brick(2,4,11,1,2,'red'), tile(0,4,11,1,1,'trlblue'), tile(0,5,11,2,1,'trred'),
               curveLong(-1,3,14,'-y',4,'blue'), curveLong(2,3,14,'-y',4,'dkblue') ]},
    {title:'Le réacteur', az:-40, el:35,
     text:`La <b>tuile noire 2x4</b> sur le dos, et tout à l'arrière la <b>brique ronde</b> : le réacteur.`,
     pieces: [ tile(0,7,10,2,4,'black'), round2(0,11,10,3,'mdblue') ]},
  ];
  return { zoff:0, groups:{}, steps, center:[8, 56], defaultPose:{}, controls:[], state: () => ({groundY:0}) };
}

Object.assign(LEGO, {vaisseauHumain});
})();
