import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'univFilter'
})
export class UnivFilterPipe implements PipeTransform {

  transform(entireData: any, searchedData:any): any {
      if(searchedData.length>=3){
        var UnivList = entireData.filter((uObj:any)=>{
          if(uObj.name.toLowerCase().trim().includes(searchedData.toLowerCase().trim())){
            return uObj;
          }
        })
      }
      else{
        return entireData;
      }
      return UnivList;
  }

}
