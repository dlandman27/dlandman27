//Author Dylan Landman
//Image Manipulation part 1


//  let robot = lib220.loadImageFromURL(
//  'https://people.cs.umass.edu/~joydeepb/robot.jpg');


function removeBlueAndGreen(img)
{
  let output = img.copy();
  for(let x = 0; x< img.width; ++x){
    for(let y = 0; y < img.height; ++y){
      let a = img.getPixel(x,y);
      output.setPixel(x,y, [a[0], 0, 0]);
    }
  }

  return output;
}





function makeGrayscale(img)
{
  let output = img.copy();
  for(let x = 0; x< img.width; ++x){
    for(let y = 0; y < img.height; ++y){
      let a = img.getPixel(x,y);
      let avg = (a[0]+a[1]+a[2])/3;
      output.setPixel(x,y, [avg, avg, avg]);
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
  




function mapToRed(img)
{
  function f(pixel)
  {
    return [pixel[0],0,0];
  }

  return imageMap(img,f);
}





function mapToGrayscale(img)
{
  function f(pixel)
  {
    let a = pixel;
    let avg = (a[0]+a[1]+a[2])/3;
    return [avg, avg, avg];
  }

  return imageMap(img,f);
}
// robot.show();

// removeBlueAndGreen(robot).show();
// makeGrayscale(robot).show();
// mapToRed(robot).show();
// mapToGrayscale(robot).show();

