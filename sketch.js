
function setup(){

    let a = new Matrix(2, 3);
    a.randomize();
    let b = a.transpose();
    console.table(a.matrix);
    console.table(b.matrix);

}