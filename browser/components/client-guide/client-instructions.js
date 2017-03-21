const clientInstructions = [
  '1. To make a GET request to /people: click on the __view all__ tab',
  '2. To make a POST request to /people: click on the __add new__ tab and enter in a name, and a favorite city for that person. To follow the example given in the guidelines, the name should be Sean and the favorite city should be New York.',
  '3. To make a GET request to retrieve the object created in the previous request: click on green prompt that appears that reads "Person successfully added and has an ID of X. Click here to view record." after you hit the "ADD PERSON" button.',
  '4. To make a PUT request to /people and modify the attribute city to be “Brooklyn”: if you are still on the page from step 3 (viewing the recently added user from the __add new__ page) simply click on the pencil of the user listed on your screen, and change either the name or city. OR you can navigate to either the __view all__ tab or __view by id__ tab, click on the pencil icon to the right of the user you want to update. A modal will pop up where you can edit the favorite city of that user (and name, if you so choose).',
  '5. To make a GET request to /people/1: Depending on the current database of the deployed app, a user with an ID of 1 may not exist. However, query the database for a user with a specific idea and hit the /people/:userId route simply go to the __view by id__ tab and search for an id of an existing person.',
  '6. To make a DELETE request to /people/1: Depending on the current database of the deployed app, a user with an ID of 1 may not exist. However, to delete a specific user by id and hit the DELETE /people/:userId route, simply go to the __view all__ tab and click on the trash icon next to a user you want to delete.',
  '7. To make a GET request to /people: click on the __view all__ tab.'
];

export default clientInstructions;
