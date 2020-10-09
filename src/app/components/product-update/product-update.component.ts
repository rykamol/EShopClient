import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  product : Product=new Product()


  constructor( public dialogRef: MatDialogRef<ProductUpdateComponent>,private productServices:ProductService) { }

  ngOnInit(): void {
    this.productForm=this.productServices.productForm;
  }


  onSubmit():void{
    console.log("form submitted successfully !!!");
    this.onclose();
  }

  onclose():void{
    this.productForm.reset();
    this.dialogRef.close();

  }
}
