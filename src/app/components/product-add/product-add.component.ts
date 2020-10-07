import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product:Product = new Product();
  productForm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      'productName':[
        this.product.productName,[
          Validators.required
        ]
      ],
      'category':[
        this.product.category,[
          Validators.required
        ]
      ],
      'uom':[
        this.product.uom,[
          Validators.required
        ]
      ],'unitPrice':[
        this.product.unitPrice,[
          Validators.required
        ]
      ],'wholeSalePrice':[
        this.product.wholeSalePrice,[
          Validators.required
        ]
      ],
      'discount':[
        this.product.discount,[
          Validators.required
        ]
      ]
    });
  }

}
