import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private goalsUrl = 'api/goals';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient) { }


  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.goalsUrl)
  }

  getGoal(id: number): Observable<Goal> {
    const url = `${this.goalsUrl}/${id}`;
    return this.http.get<Goal>(url);
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.goalsUrl, goal, this.httpOptions)
  }

  updateGoal(goal: Goal): Observable<any> {
    return this.http.put(this.goalsUrl, goal, this.httpOptions);
  }
}
