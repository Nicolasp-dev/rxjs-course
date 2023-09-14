import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { createHttpObservable } from "../utils";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  ngOnInit() {}
}
