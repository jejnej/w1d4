var tweeps = [
{handle: "@fzero", said: "Do I have to wake up early"},
{handle: "@mozilla", said: "Fight for your internet freedom"},
{handle: "@wired", said: "AI will scam your bitcoins"}
]

tweeps.push({handle: "@mozilla", said: "Fight for your internet freedom"});
tweeps[0].said = "That would be my first try";

function likeTweep(aHandle) {
 for(i = 0; i < tweeps.length; i++) {
  if(tweeps[i].handle === aHandle) {
    tweeps[i].like = true;
  }
 }
}

function modifyTweep(aHandle, field) {

   for(i = 0; i < tweeps.length; i++) {
  if(tweeps[i].handle === aHandle) {
    // the square bracket field makes it more generic. unlike the .like which will take it literally
    //
    tweeps[i][field] = true;
  }
 }
}

function capsLock(aHandle) {
    for(i = 0; i < tweeps.length; i++) {
  if(tweeps[i].handle === aHandle) {
   tweeps[i].said = tweeps[i].said.toUpperCase();
   return;
}

function allCapsOneTweep (tweep) {
  tweep.said = tweep.said.toUpperCase()
}

function findTweepAnd (aHandle, doSomething) {
 for(i = 0; i < tweeps.length; i++) {
  if(tweeps[i].handle === aHandle) {
    doSomething(tweeps[i])
  }
  }
}
modifyTweep("@fzero", "follow");
modifyTweep("@mozilla", "like")
capsLock("@fzero")
// var liking = likeTweep

// tweeps.push(likeTweep)

// tweeps[4]("@mozilla")

// likeTweep("@wired")

console.log("My tweeps: ", tweeps);



