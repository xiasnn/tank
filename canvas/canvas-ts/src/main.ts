const el = document.querySelector<HTMLCanvasElement>("#canvas")!;
const app = el.getContext("2d")!;


// 填充矩形
// app.fillStyle = "red";
// app.fillRect(0,0,300,300);
// app.fillStyle = "green";
// app.fillRect((el.width - 100) / 2,(el.height - 100) / 2,100,100);

// 线条矩形
// app.strokeStyle = "green";
// app.lineWidth = 20;
// app.lineJoin = "round";
// app.strokeRect(50,50,200,200);


// 实心圆
// app.fillStyle = "red";
// app.arc(100,100,50,0,2*Math.PI);
// app.fill();

// 线条圆
// app.strokeStyle = "red";
// app.lineWidth = 20;
// app.arc(100,100,50,0,2*Math.PI);
// app.stroke();


// 多边形线条
// app.beginPath();
// app.strokeStyle = "green";
// app.lineWidth = 20;
// app.moveTo(el.width / 2,100);
// app.lineTo(el.width - 20,250);
// app.lineTo(20,250);
// app.closePath();
// app.stroke();

// 多边形填充
// app.beginPath();
// app.fillStyle = "green";
// app.moveTo(el.width / 2,100);
// app.lineTo(el.width - 20,250);
// app.lineTo(20,250);
// app.closePath();
// app.fill();


// 渐变矩形线条
// const gradient = app.createLinearGradient(0,0,300,300);
// gradient.addColorStop(0,'red');
// gradient.addColorStop(0.5,'green');
// gradient.addColorStop(1,'blue');
// app.strokeStyle = gradient;
// app.lineWidth = 20;
// app.lineJoin = "round";
// app.strokeRect(50,50,200,200);


// 文字处理
// app.fillStyle = "#34495e";
// app.fillRect(0,0,el.width,el.height);
// app.font = "60px SourceHanSansSC-Normal";
// 实心
// app.fillStyle = gradient;
// app.textBaseline = "top"; //文字基线
// app.fillText("后盾人",50,10);
// 空心
// app.strokeStyle = gradient;
// app.lineWidth = 2;
// app.textBaseline = "bottom"; //文字基线
// app.strokeText("xiasnn",50,250);


// 图片贴图
// const img = document.createElement("img");
// img.src = "./images/3.jpg";
// 控制图片是否重复
// img.onload = () => {
//   const pattern = app.createPattern(img,"repeat")!;
//   app.fillStyle = pattern;
//   app.fillRect(0,0,300,300);
// }

// 控制图片的比例大小
// img.onload = () => {
//   el.width = img.naturalWidth * scale(img,el);
//   el.height = img.naturalHeight * scale(img,el);
//   app.drawImage(img,0,0,el.width,el.height);
// }

// function scale(img:HTMLImageElement,el:HTMLCanvasElement){
//   return Math.min(el.width / img.naturalWidth,el.height / img.naturalHeight);
// }


// 随机小点
// app.fillStyle = "#000";
// app.fillRect(0,0,300,300);
// for(let i=0; i<100; i++){
//   app.fillStyle = 'white';
//   app.fillRect(Math.random()*el.width,Math.random()*el.height,2,2);
// }

// 随机色快
app.fillStyle = "#000";
app.fillRect(0,0,300,300);
for(let i=0; i<20; i++){
  app.beginPath();
  app.fillStyle = ['red', 'green', 'blue','yellow', 'orange','purple'].sort(() => (Math.floor(Math.random() * 3) ? 1 : -1))[0];
  app.arc(Math.random()*(el.width / 2),Math.random()*(el.height / 2),5+Math.random()*50,0,2*Math.PI);
  app.fill();
}