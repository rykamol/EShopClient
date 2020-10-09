import { ProductService, PeriodicElement } from './../../services/product.service';
import { ProductUpdateComponent } from './../product-update/product-update.component';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
}) 
export class ProductListComponent implements OnInit, AfterViewInit{
  displayedColumns:string[];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(
    public dialog: MatDialog,
    private productService:ProductService
    ){}

  ngOnInit(): void {    
    this.displayedColumns = ['position', 'name', 'weight', 'symbol','actions'];
    this.dataSource = new MatTableDataSource<any>(this.productService.GetAll())
  }

  openDialog(row){
    //this.productService.productForm.setValue(row)
    console.log(row);
    const dialogRef = this.dialog.open(ProductUpdateComponent, {
      width: '450px',
      disableClose:true,
      autoFocus:true,      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
}
  
}
