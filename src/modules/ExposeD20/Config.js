export default {
    id: "exposeD20",
    force: true,

    includes: "assets/app.js",
    find: "getPointer,degreesToRadians;",
    patch: "getPointer,degreesToRadians;window.d20=d20;window.exports=exports;",

    expectedPatchCount: 2
};
