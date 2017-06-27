

function divideNumbers(){
  for(var i=0;i<101;i++){
    if (i%3===0 && i%5===0){
      console.log('bingbong');
    }
    else if (i%5===0){
      console.log('bong');
    }
    else if (i%3===0){
      console.log('bing');
    }
    else {console.log(i);
    }
  }

}
