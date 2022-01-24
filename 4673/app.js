function NotSelfnumber(n) {
    let array =  String(n).split('')
    let sum = n;
    for (var i=0; i<array.length; i++) {
        sum += Number(array[i]);
    }
    return sum;
}

function selfnumber(N){
    let selfnum = []
    let result = []

    for(let i=1; i <= N; i++){
        let index = NotSelfnumber(i); 
        
        if(index <= N){
            selfnum[index] = true; // true = notselftrue
        }
    }

    for(let i=1; i<= N; i++){
        if(!selfnum[i]) result.push(i);
    }
    console.log(result.join('\n'));
}

selfnumber(10000);
