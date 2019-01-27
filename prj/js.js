document.getElementById('rr').oninput = cssGenerator;
document.getElementById('tl').oninput = cssGeneratorTopLeft;//left top
document.getElementById('tr').oninput = cssGeneratorTopRight;//top right
document.getElementById('bl').oninput = cssGeneratorBottomLeft;//bottom left
document.getElementById('br').oninput = cssGeneratorBottomRight;//botton right

    
   var blockGenerates = document.getElementById('blockGenerate');

function cssGenerator(){


    blockGenerates.style.borderBottomLeftRadius = this.value + 'px';
    document.getElementById('out').innerHTML = "border-radius: " + this.value;
    console.log(this.value);
}
function cssGeneratorTopLeft(){


    blockGenerates.style.borderTopLeftRadius = this.value + 'px';
    document.getElementById('outTl').innerHTML = "border-radius-Top-left: " + this.value;
    console.log(this.value);
}
function cssGeneratorTopRight(){


    blockGenerates.style.borderTopRightRadius = this.value + 'px';
    document.getElementById('outTr').innerHTML = "border-radius-Top-right: " + this.value;
    console.log(this.value);
}
function cssGeneratorBottomLeft(){


    blockGenerates.style.borderBottomLeftRadius = this.value + 'px';
    document.getElementById('outBl').innerHTML = "border-radius-bottom-left: " + this.value;
    console.log(this.value);
}
function cssGeneratorBottomRight(){


    blockGenerates.style.borderBottomRightRadius = this.value + 'px';
    document.getElementById('outBr').innerHTML = "border-radius-bottom-right: " + this.value;
    console.log(this.value);
}
