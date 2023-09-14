import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { createHttpObservable } from "../utils";
import { map } from "rxjs/operators";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    const http$ = createHttpObservable("/api/courses");

    const courses$ = http$.pipe(map((res) => Object.values(res["payload"])));
  }
}
