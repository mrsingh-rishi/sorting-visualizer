export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length <= 1){
        return array;
    }
    bubbleSort(array,0,array.length-1,animations);
    return animations;
}


function bubbleSort(array, startIdx, endIdx, animations){
     
    for(var i = startIdx; i < endIdx; i++){ 
      for(var j = startIdx; j < ( endIdx - i - 1 ); j++){
        array.style.background="red";
        array[j+1].style.background="red";
        if(array[j] > array[j+1]){
          swap(array[j],array[j+1]);
        }
      }
    }
   }

   function swap(el1,el2)
    {
 
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
 
 
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
 
      el1.style.height = transform2;
      el2.style.height = transform1;
 
    }