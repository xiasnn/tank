import './style.css'

class Blackboard{
  constructor(
    public el = document.querySelector<HTMLCanvasElement>("#canvas")!,
    private app = el.getContext("2d")!,
    private width: number = el.width,
    private height: number = el.height,
    private btns:HTMLDivElement = document.createElement('div'),
    private bgColor = "#000",
    private lineColor = "#fff",
    private lineWidth = 1
  ){
    this.initBlackboard();
    this.bindEvent();
  }

  // 截图
  public short(){
    const btn:HTMLButtonElement = document.createElement("button");
    btn.innerText = "截图";
    this.btns.insertAdjacentElement("afterbegin",btn);
    const img = document.createElement("img");
    btn.addEventListener("click",() => {
      img.src = this.el.toDataURL("image/jpeg");
      img.classList.add("short-img");
    });
    this.btns.insertAdjacentElement("afterend",img);
    return this;
  }

  // 橡皮擦
  public eraser(){
    const btn:HTMLButtonElement = document.createElement("button");
    btn.innerText = "橡皮擦";
    this.btns.insertAdjacentElement("afterbegin",btn);
    btn.addEventListener("click",() => {
      this.lineColor = this.bgColor;
      this.app.lineWidth = 10
    });
    return this;
  }

  // 改变线条粗细
  public changeLinerWidth(){
    const widths = [1,5,8,10,12,15];
    const container = document.createElement('div');
    container.classList.add("widthBox");
    widths.forEach(width => {
      const div = document.createElement("div");
      div.innerText = `${width}`;
      container.insertAdjacentElement("afterbegin",div);
      div.addEventListener("click",() => {
        this.lineWidth = width;
        this.app.lineWidth = this.lineWidth;
      })
    });
    this.btns.insertAdjacentElement("beforeend",container);
    return this;
  }

  // 改变线条颜色
  public changeLinerColor(){
    const colors = ["#3498db","#9b59b6","#f1c40f","#e74c3c","#fff"];
    const container = document.createElement('div');
    container.classList.add("colorBox");
    colors.forEach(color => {
      const div = document.createElement("div");
      div.style.cssText = `background-color:${color};`;
      container.insertAdjacentElement("afterbegin",div);
      div.addEventListener("click",() => {
        this.lineColor = color;
        this.app.lineWidth = this.lineWidth;
      })
    });
    this.btns.insertAdjacentElement("beforeend",container);
    return this;
  }

  // 改变背景颜色
  public changeBgColor(color:string){
    this.bgColor = color;
    this.app.fillStyle = this.bgColor;
    this.app.fillRect(0,0,this.el.width,this.el.height);
    return this;
  }

  // 清屏
  public clear(){
    const btn:HTMLButtonElement = document.createElement("button");
    btn.innerText = "清屏";
    this.btns.insertAdjacentElement("afterbegin",btn);
    btn.addEventListener("click",() => {
      this.app.fillStyle = this.bgColor;
      this.app.fillRect(0,0,this.el.width,this.el.height);
    });
    return this;
  }

  // 绑定事件
  private bindEvent(){
    const callback = this.drawLine.bind(this);
    this.el.addEventListener("mousedown",() => {
      this.app.beginPath();
      this.app.strokeStyle = this.lineColor;
      this.el.addEventListener("mousemove",callback);
      
    });
    document.addEventListener("mouseup",() => {
      this.el.removeEventListener("mousemove",callback);
    });
  }

  // 画线
  private drawLine(event:MouseEvent){
    this.app.lineTo(event.offsetX,event.offsetY);
    this.app.stroke();
  }

  // 初始化黑板
  private initBlackboard(){
    this.app.fillStyle = this.bgColor;
    this.app.fillRect(0,0,this.width,this.height);
    this.app.lineWidth = this.lineWidth;
    this.btns.classList.add("btns");
    this.el.insertAdjacentElement("afterend",this.btns);
  }
}

const instance = new Blackboard();
instance.clear().changeBgColor("#1abc9c").changeLinerColor().eraser().changeLinerWidth().short();