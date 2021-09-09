# To Fix List

> on signup adding "name" field to firebase takes time to fire, while that is happening the newly created user is added to db without name firing off a required name error. 
> the db is then updated after the name field is added to the firebase field. my short-term answer was to remove required from name to get around the error but is a bad strat. The db should not move to save until the object is completed.
