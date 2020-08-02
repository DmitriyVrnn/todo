import { takeUntil, mergeMap, map } from "rxjs/operators";
import { interval } from "rxjs";

export const fetchUsersEpic = (action$: any) =>
  action$.pipe(
    mergeMap(() => {
      return interval(5000).pipe(
        map(() => ""),
        takeUntil(action$.ofType("")),
      );
    }),
  );
