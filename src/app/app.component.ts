import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/repeatWhen';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/sequenceEqual';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/window';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showPluck = false;
  pluckResult = '';

  showReduce = false;
  reduceResult = '';

  showRepeat = false;
  repeatResult = '';

  showRepeatWhen = false;
  repeatWhenResult = '';

  showRetry = false;
  retryResult = '';

  showRetryWhen = false;
  retryWhenResult = '';

  showSample = false;
  sampleResult = '';

  showScan = false;
  scanResult = '';

  showSequenceEqual = false;
  sequenceEqualResult = '';

  showSingleOne = false;
  singleOneResult = '';

  showSingleTwo = false;
  singleTwoResult = '';

  showSkip = false;
  skipResult = '';

  showStartWith = false;
  startWithResult = '';

  showTake = false;
  takeResult = '';

  showThrottle = false;
  throttleResult = '';

  showToPromise = false;
  toPromiseResult = '';

  showWindow = false;
  windowResult = '';
  
  ngOnInit() {
     /*
     this.showPluck = true;
     
     Observable.of({"firstName": "Daryl", age: 26},{"firstName": "Michael", age: 54}, {"firstName": "Kobe", age: 38})
               .pluck("firstName")
               .subscribe(value => {
                 this.pluckResult += `${value} `;
               });
      */

      /*
      this.showReduce = true;
      
      Observable.of(1,3,10,54,37,106)
                .reduce((acc, curr) => acc + curr)
                .subscribe(value => this.reduceResult = value.toString());
      */

      /*
      this.showRepeat = true;
      
      Observable.of(1, 5, 9)
                .repeat(3)
                .subscribe(value => this.repeatResult += `${value} `);
      */
      
      /*
      this.showRepeatWhen = true;

      Observable.interval(1000)
                .take(3)
                .repeatWhen(completed => completed.delay(3000))
                .subscribe(value => this.repeatWhenResult += `${value+1} `);
      */

      /*
      this.showRetry = true;

      Observable.interval(200)
                .map(value => {
                  if(value > 5) {
                    throw new Error("Error");
                  }
                  else {
                    return value;
                  }
                })
                .retry(2)
                .subscribe(
                  value => { this.retryResult += `${value} `; },
                  error => { this.retryResult += `${error} `; }
                );
      */

      /*
      this.showRetryWhen = true;

      Observable.interval(200)
                .map(value => {
                  if(value > 5) {
                    throw new Error("Error");
                  }
                  else {
                    return value;
                  }
                })
                .retryWhen(function(errors) {
                  return errors.delay(1000);
                })
                .subscribe(
                  value => { this.retryWhenResult += `${value} `; },
                  error => { this.retryWhenResult += `${error} `; }
                );
        */
    
        /*
        this.showSample = true;

        var seconds = Observable.interval(1000);
        var clicks = Observable.fromEvent(document, 'click');
        seconds.sample(clicks)
               .subscribe(value => { this.sampleResult += `${value} `; });
        */

        /*
        this.showScan = true;
         
        Observable.of(1, 2, 3, 4, 5, 6)
                  .scan((acc, curr) => acc + curr)
                  .subscribe(value => {
                    this.scanResult += `${value} `;
                  });
        */

        /*
        this.showSequenceEqual = true;
         
        var streamOne = Observable.of(1, 2, 3, 4, 5, 6);
        var streamTwo = Observable.of(1, 2, 3, 4, 5, 6);
  
        streamOne.sequenceEqual(streamTwo)
                 .subscribe(value => {
                   this.sequenceEqualResult = `${value}`;
                 });
        */

        /*
        this.showSingleOne = true;
         
        Observable.of(1)
                  .single()
                  .subscribe(
                    value => {
                      this.singleOneResult = `${value}`;
                    },
                    error => {
                      this.singleOneResult = `${error}`;
                    }
                  );
        */

        /*
        this.showSingleTwo = true;
         
        Observable.of(1, 2, 3)
                  .single(value => value % 2 == 0)
                  .subscribe(
                    value => {
                      this.singleTwoResult = `${value}`;
                    },
                    error => {
                      this.singleTwoResult = `${error}`;
                    }
                  );
        */

        /*
        this.showSkip = true;

        Observable.of(1,2,3,4,5,6,7)
                  .skip(4)
                  .subscribe(value => this.skipResult += `${value} `)
        */

        /*
        this.showStartWith = true;

        Observable.of(1,2,3,4,5,6,7)
                  .startWith(4)
                  .subscribe(value => this.startWithResult += `${value} `)
        */

        /*
        this.showTake = true;

        Observable.interval(1000)
                  .take(4)
                  .subscribe(value => this.takeResult += `${value+1} `)
        */

        /*
        this.showThrottle = true;

        var clicks = Observable.fromEvent(document, 'click');
        var result = clicks.throttle(ev => Observable.interval(500));
        result.subscribe(value => this.throttleResult += this.setCurrentCursorPositionAsText(value));
        */

        /*
        this.showToPromise = true;

        Observable.of(1)
                  .toPromise()
                  .then(value => { 
                      this.toPromiseResult += value.toString();
                  });
        */

        /*
        this.showWindow = true;

        var clicks = Observable.fromEvent(document, 'click');
        var interval = Observable.interval(1000);
        var result = clicks.window(interval)
                           .map(win => win.take(4))
        
        result.subscribe(x => { 
          x.subscribe(y => this.windowResult += this.setCurrentCursorPositionAsText(y));
        });
        */
  }

  private setCurrentCursorPositionAsText(currentPosition: any)
  {
    var mouseMoveEvent = currentPosition as MouseEvent;
    return `Mouse position is now at (${mouseMoveEvent.clientX},${mouseMoveEvent.clientY})\r\n`;
  }
}