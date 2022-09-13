import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../services/countries.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  public publicString = "publicString";
  protected protectedString = "protectedString";
  private privateString = "privateString";

  constructor(protected countries: CountriesService) {
  }

  ngOnInit(): void {
  }

  directMethod() {
    return "Direct call";
  }
}
