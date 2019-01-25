import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;

  constructor(private _productsService:ProductsService) { }

  ngOnInit() {
    this._productsService.getAlbum(1).subscribe(
                            response => this.albumInfo = response
    );
  }

}
