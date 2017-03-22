const clientInstructions = [
  '1. To make a GET request to /people: click on the __view all__ tab',
  '2. To make a POST request to /people: click on the __add new__ tab and enter in a name, and a favorite city for that person. To follow the example given in the guidelines, the name should be Sean and the favorite city should be New York.',
  '3. To make a GET request to retrieve the object created in the previous request: From step 2, after you click on "ADD PERSON" click on green prompt that appears that reads "Person successfully added and has an ID of X. Click here to view record."',
  '4. To make a PUT request to /people and modify the attribute city to be “Brooklyn”: if you are still on the page from step 3 (viewing the recently added user from the add new page) simply click on the pencil icon of the user listed on your screen and change either the name or city, then hit save. OR you can navigate to either the view all tab (will make another request to GET /people) and click on the pencil next to that user, or view by id tab, search for the ID of the person (will make a request to GET /people/:personId) and then click on the pencil icon to the right of the user that appears, then edit from there. A modal will pop up where you can edit the favorite city of that user (and name, if you so choose) then hit save.',
  '5. To make a GET request to /people/1: Depending on the current database of the deployed app, a user with an ID of 1 may not exist. However, query the database for a user with a specific idea and hit the /people/:personId route simply go to the view by id tab and search for an id of an existing person.',
  '6. To make a DELETE request to /people/1: Depending on the current database of the deployed app, a user with an ID of 1 may not exist. However, to delete a specific user by id and hit the DELETE /people/:personId route, simply go to the view all tab and click on the trash icon next to a user you want to delete.',
  '7. To make a GET request to /people: click on the __view all__ tab.'
];

export default clientInstructions;


