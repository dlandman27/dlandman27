//Author Dylan Landman
//Creates a grayscale image


 let robot = lib220.loadImageFromURL(
 'https://people.cs.umass.edu/~joydeepb/robot.jpg');

function highlightEdges(img){
  let output = img.copy();
  for(let x = 0; x< img.width; ++x){
    for(let y = 0; y < img.height-1; ++y){
      let a = img.getPixel(x,y);
      let m1 = (a[0]+a[1]+a[2])/3;
      a = img.getPixel(x,y+1);
      let m2 = (a[0]+a[1]+a[2])/3;

      output.setPixel(x,y,[Math.abs(m1-m2),Math.abs(m1-m2),Math.abs(m1-m2)]);
    }
  }

  return output;

}
 
function blur(img){

  let output = img.copy();

  function getNeighbors(x,y,img)
  {
    let xVals = [x-1,x,x+1];
    xVals = xVals.filter(a => (a > 0 && a < img.width));

    let yVals = [y-1,y,y+1];
    yVals = yVals.filter(a => (a > 0 && a < img.height));

    let neighbors = [];
      for(let a = 0; a < xVals.length; ++a){
        for(let b = 0; b < yVals.length; ++b){
          neighbors.push(img.getPixel(xVals[a],yVals[b]));
        }
    }
    return neighbors;
  }
   console.log(getNeighbors(1,2,robot));
 

  for(let x = 0; x < img.width; ++x){    //img.width
    for(let y = 0; y < img.height; ++y){//img.height

        let red = 0;
        let green = 0;
        let blue = 0;

        let n = getNeighbors(x,y,img);

        for(let i = 0;i < n.length;++i){

          red = red + n[i][0];
          green = green + n[i][1];
          blue = blue + n[i][2];

        }

        red = red / n.length;
        green = green / n.length;
        blue = blue / n.length;
        
        output.setPixel(x,y,[red,green,blue]);
    }
  }
  return output;

}

//imageMap(img: Image, func: (p: Pixel) => Pixel): Image
function imageMap(img,f)
{
  let output = img.copy();
  for(let x = 0; x< img.width; ++x){
    for(let y = 0; y < img.height; ++y){
      let pixel = f(output.getPixel(x,y));
      output.setPixel(x,y,pixel);
    }
    
  }
  return output;
}


function swapGB(img){
  function f(pixel)
    {
      let a = pixel;
      let temp = a[1];
      a[1] = a[2];
      a[2] = temp;
      return a;
    }

  return imageMap(img,f);
}

function shiftRGB(img){
  function f(pixel)
    {
      let a = pixel;
      let red = a[0],green = a[1],blue = a[2];
      a[0] = blue;a[1] = red; a[2] = green;
      return a;
    }

  return imageMap(img,f);
}
