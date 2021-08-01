
//su dung de lap qua cac phan tu 1 day tao ra 1 phan tu tra ve
//ham tinh tong 1 day
const sumFor=(numberList) => {
    let sum=0;
    for(const number of numberList){
        const newSum=sum+number;
        sum=newSum;
    }
    return sum;
};
//console.log(sumFor([1,2,3,4,5]));

//ham reduce()
//xac dinh gia tri khoi tao
// xac dinh cong thuc voi ket qua cua buoc truoc do
//result = prevResult +current
const sumReduce=(numberList)=>{
    //return numberList.reduce((resultFromLastStep,curValue)=>{},0);ket qua truoc la 1 ham curV la gia tri khoi tao
  //  return numberList.reduce((sum,number)=>{
    //    const newSum=sum+number;
      //  return newSum;
        //cach 2 return sum+number;
    //},0);
    //ngan gon
    return numberList.reduce((sum,number)=>sum+number,0);
};
console.log(sumReduce([1,2,3,4,5]));
//first sum=0


// find the longest word

const findthelongestword=(wordList)=>{
    if(!Array.isArray(wordList) || wordList.length===0) return null;
    return wordList.reduce((theLongestWord,currentWord)=>{
        return theLongestWord.length>currentWord.length
        ? theLongestWord :currentWord;
    },wordList[0]);
}
const wordList=['Love','easy','banhben'];
console.log(findthelongestword(wordList));//ten ham
//dinhnghia hoac ghi truc tiep gia tri dau vao

//chuyen mang thanh object
const ArrayToObject=(itemList)=>{
   return itemList.reduce((itemMap,item)=>{
       itemMap[item.id]=item.value;
    return itemMap;
   },{});
};

const itemList=[
    { id: 'key1', value:'supermen'},
    {id:'key2',value:'batman'},
    {id:'key3',value:'joke'},
];
console.log(ArrayToObject(itemList));
//object { key1: 'supermen', key2: 'batman', key3: 'joke' }
//bai tap
// tim min 
// tim so chan lon nhat
//chuyen doi obj thanh mang

const minnumber=(numberList)=>{
    return numberList.reduce((premin,current)=>{
        return premin < current ? premin : current;
    },numberList[0]);
};
console.log(minnumber([1,4,2,6,5]));

const maxevennumber=(numberList)=>{
    return numberList.reduce((premax,current)=>{
       if(current%2 ==0 ){
           return premax > current ? premax : current;
       } 
       else
        return premax;
    },{});
}
console.log(maxevennumber([7,4,2,6,5]));


const item={
    key1:'HTML',
    key2:'java',
    key3:'Js'
}

const ObjectToArray=(item)=>{
    //xac dinh mang tu object la object.keys(item)=>tao key
    //sau do dung reduce lap qua mang tren
    return Object.keys(item).reduce((itemList,key)=>{
        itemList.push({
            id:key,
            value:item[key]
        });
        return itemList;
    },[]);
};

console.log(ObjectToArray(item));