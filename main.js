//number +number
console.log(1+1);
console.log(100+'100'-'100'+'100');
//string +string=string
console.log('log'+'log');
//number+string=string +string=string
console.log('100'+'200');
console.log(100+100+'200');//trai sang phai roi cong chuoi
//theo phep tinh thong thuong neu 2 phan tu so va chuoi bang chuoi


//phep tru
//string-string=not a number chuyen chuoi ve so
//nan-nan=nan
//number - numberstring=number-number=number
console.log('abc'-'ghr');

console.log(100+'100'-'100'+'100');
//bai 2
//tham tri tham chieu
//tham tri luu truc tiep gia tri
//tham chieu (string object) luu dia chi cac gia tri
//phep gan object = copy dia chi
//const b=a-> b cung tro ve cung dia chi khi 1 trong 2 thay doi gia tri chua dia chi do ca 2 sex thay doi gia tri
let a=5;
let b=a;//tham tri

//tham chieu
const a={name:'hau'};
const b=a;
a.name="op";
console.log(b.name);
//truyen tham so dang tham tri -pass by value
function doMagic1(number){
    number=10;
}
const a=5;
dom
doMagic1(a);
console.log(a);
//a =5 vi jv tao ra mot ban sao const a1=a va no thay doi gia tri a1 =10 chu ko thay the a

//truyen tham so dang tham chieu-pass by reference
function doMagic2(obj) {
    obj.name='Po';
}
const a={name:'hau'};
doMagic2(a);
console.log(a.name);//po
//vi tao bien moi a1 tro ve cung dia chi voi a nen khi thay doi gia tri thi a cung bi anh huong

//lam the nao de ko dinh tham chieu spread operator (...)
const a={name:'hau'};
const b={...a};
a.name="po";
console.log(b.name);

//luu y ve thay doi gia tri object
componentDidMount(){
    const {numberList}=this.state;
    numberList.push(1);
    this.setState({numberList});
    //so phan tu numberList van se bang ) vi ban than   this.setState({numberList});tuong duong voi   this.setState({numberList:numberList});
    // tuc la khi thay doi numberlist nhung dia chi van la dia chi obj cu ma ham chi thuc hien chuc nang so sanh 2 dia chi thay giong nhau nen ko thay doi 
    // so phan tuva cho no bang 0

}
//sua doi tao obj moi 
componentDidMount(){
    const {numberList}=this.state;
    newnumberList=[...numberList];
    newnumberList.push(1);
    this.setState({numberList:newnumberList});
}