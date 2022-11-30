import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = []
  momets: Moment[]=[]
  baseApiUrl = environment.baseApiUrl

  constructor(private moementService : MomentService) {

   }

  ngOnInit(): void {
    this.moementService.getMoments().subscribe((itens)=>{
      const data = itens.data

      data.map((item)=>{
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });
      this.allMoments=data;
      this.momets = data;
    });
  }

}
