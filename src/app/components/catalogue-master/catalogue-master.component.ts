import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogue-master',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogue-master.component.html',
  styleUrl: './catalogue-master.component.css'
})
export class CatalogueMasterComponent implements OnInit {


  catalogueValues: any[] = [];
  catalogues: any[] = [];

  catalogue: any = {
    id: null,
    name: '',
    typez: '',
    status: ''
  };
  catalogueDropdown: any[] = [];
  msg: string = '';

  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {

    this.getAllCatalogueValue();
   this.getDropdownValues();
  }
 
  getDropdownValues(){
 this.catalogueService.getCatalogueType().subscribe(data => {
      this.catalogueDropdown = data;
    })
  }

  getAllCatalogueValue() {
    this.catalogueValues = [];
    this.catalogueService.getAllCatalogue().subscribe(data => {
      this.catalogueValues = data;
    })
  }

  editCatalogue(id: number) {
    // this.router.navigate(['editstate',id])

    this.catalogueService.getCatalogueById(id).subscribe(
      data => { this.catalogue = data },
      error => { console.log("Something Went Wrong") })
  }

  deleteCatalogue(id: number) {
    if (window.confirm("Do You Want To Delete?")) {
      this.catalogueService.deleteCatalogueById(id).subscribe(data => {
        this.getAllCatalogueValue();
        this.showMessage(data.toString());
      })
    }
  }

  addPage() {
    this.router.navigate(['addstate']);
  }

  onSubmit() {
    this.saveCatalogue();
  }
  saveCatalogue() {
    if (window.confirm('Do You Want To Submit?')) {
      if (this.catalogue.id) {
        this.catalogueService.updateCatalogue(this.catalogue).subscribe(data => {
          this.showMessage(data);
          this.resetForm();
          this.getAllCatalogueValue();
        })
      } else {
        this.catalogueService.createCatalogue(this.catalogue).subscribe(data => {
          this.showMessage(data.toString());
          this.resetForm();
          this.getAllCatalogueValue();
        })
      }

    }
  }

  showMessage(message: string) {
    this.msg = message

    setTimeout(() => {
      this.msg = ''
    }, 4000);
  }

  resetForm() {
    this.catalogue = { id: null, name: '', typez: '', status: '' };
  }

  catalogueType = { id: null, name: '' };
  // Angular-friendly modal toggle
  showModal = false;

  // Open / Close modal
  openModal() {
    this.getAllCatalogues();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.catalogueType = { id: null, name: '' };
  }

  // Save or Update Catalogue Type
  saveCatalogueType() {
    if (this.catalogueType.id) {
      this.catalogueService.updateCatalogueType(this.catalogueType).subscribe(data => {
         this.getDropdownValues();
        this.showMessage(data);
        //  this.getAllCatalogueValue();
      })
    } else {
      this.catalogueService.createCatalogueType(this.catalogueType).subscribe(data => {
       this.getDropdownValues();
        this.showMessage(data.toString());
        // this.resetForm();
        // this.getAllCatalogueValue();
      })
    }
    this.closeModal();
  }

  // Edit existing type
  editCatalogueType(id: number) {
    this.catalogueService.getCatalogueTypeById(id).subscribe(
      data => { this.catalogueType = data },
      error => { console.log("Something Went Wrong") })
    this.openModal();
  }

  // Delete type
  deleteCatalogueType(id: number) {
  //  this.catalogueDropdown = this.catalogueDropdown.filter(t => t.id !== id);
 if (window.confirm("Do You Want To Delete?")) {
      this.catalogueService.deleteCatalogueTypeById(id).subscribe(data => {
        this.getAllCatalogues();
        this.getDropdownValues();
        this.showMessage(data.toString());
      })
    }

    this.closeModal();
  }

  getAllCatalogues() {
    this.catalogues = [];
    this.catalogueService.getAllCatalogues().subscribe(data => {
      this.catalogues = data;
    })
  }
}
