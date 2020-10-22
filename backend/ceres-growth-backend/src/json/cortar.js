const jsonn = require('teste.json');
//const sessionIdFilePath = `${__dirname}teste.json`;
//let jsonn;
//jsonn = require(sessionIdFilePath);
for(i = 0; i<jsonn.data.node.length; i++){
  for(j = 0; j<jsonn[i].new_members.edges.length; j++){
    //console.log(jsonn[i].new_members.edges.length);
    console.log("--------------------", j,"---------------------------",i);
    console.log(jsonn[i].new_members.edges[j].node.name);
  }
}
"_user=100056706517783; xs=44%3AIwIgsSxMGdxNXQ%3A2%3A1602866024%3A-1%3A-1;"
