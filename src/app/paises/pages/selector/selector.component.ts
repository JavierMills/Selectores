import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { Region } from '../../interfaces/region.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  
})
export class SelectorComponent implements OnInit {

  FormularioSelector: FormGroup = this.fb.group({
    region:['',[Validators.required]],
    pais:['',[Validators.required]],
    frontera:['',[Validators.required]],
  })

  // llenar selctores

  regiones: string[]= [];
  paises: Region[]= [];
  fronteras: Region[]= [];

  cargando: boolean = false;
 

  constructor( private fb : FormBuilder, private selectorService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.selectorService.regiones

    // cuando cambie la region

    // this.FormularioSelector.get('region')?.valueChanges.subscribe(region => {
    //   console.log(region);

    //   this.selectorService.getPaisesByRegion( region).subscribe( paises =>{
    //     this.paises = paises;
    
    //     // this.bandera = paises[0].flags.png;
    //     console.log(this.paises);
    //   })
    // })

    this.FormularioSelector.get('region')?.valueChanges
    .pipe(
      tap( (_) => {
        this.FormularioSelector.get('pais')?.reset('')
        this.cargando = true
      }),
      switchMap( region => this.selectorService.getPaisesByRegion( region) )
    )
    .subscribe(paises => {
      this.paises = paises;
      this.cargando = false;
    });

    this.FormularioSelector.get('pais')?.valueChanges
    .pipe(
      tap((_) =>{
        this.FormularioSelector.get('frontera')?.reset('')
        this.cargando = true;

      }),
      switchMap( codigo => this.selectorService.getCountry( codigo )),
      // switchMap( ({borders}) => this.selectorService.getPaisesPorCodigo(borders!))
    )
    .subscribe( (paises: any) =>{
   
      this.fronteras = paises[0]?.borders || [];
      this.cargando = false;

    })

  }


  guardar(){
    console.log(this.FormularioSelector.value);
  }

}
