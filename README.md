# FaceRating React Component
![alt text](https://github.com/wiltonribeiro/facerating/blob/master/Preview/preview.gif)

FaceRating is a React.js component created to help in evaluating with use of emotions (emojis).

###### The Component
By default the component must be inicialized with this parameters.
```
  <FaceRating getNote={this.getNote} editable={true} emoji = {texts} />
```

###### Editable
Editable can be true or false. It's responsible to make the component able to be edited. There's an example of editable: false.
```
  <FaceRating getNote={this.getNote} editable={false} selected={2} emoji = {texts} />
```
![alt text](https://github.com/wiltonribeiro/facerating/blob/master/Preview/Screenshot%20from%202018-05-16%2001-19-31.png)

###### Selected
Selected can between 1 and 5. It's responsible to start with an emoji previously selected.
```
  <FaceRating getNote={this.getNote} editable={true} selected={1} emoji = {texts} />
```
![alt text](https://github.com/wiltonribeiro/facerating/blob/master/Preview/Screenshot%20from%202018-05-16%2001-17-54.png)

###### ColorFont
ColorFont changes the color of text below the emoji, by default colorFont is #909090.
```
  <FaceRating getNote={this.getNote} colorFont={"purple"} editable={true} selected={1} emoji = {texts} />
```
![alt text](https://github.com/wiltonribeiro/facerating/blob/master/Preview/Screenshot%20from%202018-05-16%2001-22-18.png)


###### Emoji texts
You are the responsible to say which texts will be below the emojis. Create an array of 5 sizes with the texts, each component will be showed to each emoji.
```
  const texts = ["Anymore","Nope","Regular","Good","I need more!"];

    return (
       <FaceRating getNote={this.getNote} editable={true} emoji = {texts} />
    );
```
#### getNote() Event
It's necessary to create the component. This method is responsible to get the note(rate) when user clicks on the component. Example: if the user clicks in the first emoji, the method getNote() return the value 1.
```
  getNote = note => {
    //do whatever you want with the note.
  }
```
#### getNote() Event Example

```
  getNote = note => {
    alert("Note selected is:"+ note);
  }
```
![alt text](https://github.com/wiltonribeiro/facerating/blob/master/Preview/Screenshot%20from%202018-05-16%2001-20-46.png)



