import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public allchec: boolean=false;
 public userid: number;

  constructor(private httpService: HttpClient) { }


  public updateProduct(updateProduct: ProductStock) {
    console.log("ins service update");
    console.log(updateProduct);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7080/productstock/exitdate", updateProduct,  { headers, responseType: 'text'});
  }

  public updateRawmaterial(updateRawmaterial: RawMaterialStock) {
    console.log("ins service update");
    console.log(updateRawmaterial);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:6002/rawmaterialstock/exitdate", updateRawmaterial,  { headers, responseType: 'text'});
  }
  public getProduct(id:number) {
    console.log("ins service get product");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<ProductStock>("http://localhost:8087/productstock/getOrder/"+id);
  }
  public getRawmaterial(id:number) {
    console.log("ins service get rawmaterial");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<RawMaterialStock>("http://localhost:7005/rawmaterial/getOrder/"+id);
  }

}
export class ProductStock
{
    orderId:number;
    name:string;
    pricePerUnit:number;
    quantityValue:number;
    quantityUnit:number;
    price:number;
    warehouseId:String;
    deliveryDate:Date;
    manufacturingDate:Date;
    expiryDate:Date;
    qualityCheck:string;
    exitDate:Date;
}
export class RawMaterialStock
{
    orderId:number;
    name:string;
    pricePerUnit:number;
    quantityValue:number;
    quantityUnit:number;
    price:number;
    warehouseId:string;
    deliveryDate:Date;
    manufacturingDate:Date;
    expiryDate:Date;
    qualityCheck:string;
    processDate:Date;
}
