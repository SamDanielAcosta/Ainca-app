import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  loadingIndicator = false;
  columnMode = ColumnMode;
  temp = [];
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }, { name: 'Daniel' }]

   public ngOnInit(): void {
     this.temp = this.rows;
  }

  onClickExport() {
    let $this = this;
    $this.loadingIndicator = true;
    setTimeout(function () {
      $this.loadingIndicator = false;
    }, 1000);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      if(d.name.toLowerCase().indexOf(val) !== -1 || d.gender.toLowerCase().indexOf(val) !== -1
      || d.company.toLowerCase().indexOf(val) !== -1 || !val){
        return d;
      }
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
