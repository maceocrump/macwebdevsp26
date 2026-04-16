web dev spring 26 notes

tues/thurs 4-5:50pm in room 308 IDM


==============================================
WEEK 1
==============================================

intro class, went over syllabus
brief history of the web (youtube vid she showed)

software we need:
- chrome 
- VS code (exclusively)
- install prettier extension
- photoshop

git stuff --
git = version control, tracks changes
github = git repo host

terminal commands:
ls = lists files (mac)
dir = same thing but windows
cd foldername = move into folder
cd ../ = go back up

git commands:
git clone [url] = make local download copy of remote repo
git pull = sync w latest (do every class
git add .
git commit -m "name of commit"
git push = sends local version updates to remote repo
^ how to submit hw

HTML basics --
html = structure of page
css = how it looks
html tags are like <tagname>content</tagname>
closing tag has a / before name 

head = info abt the page, not visible
body = the stuff u actually see

tags to know: h1-h6, p, strong, em, a, img, ul, ol, li

links: <a href="url">click me</a>
images: <img src="path/to/img.jpg" /> (self closing, no end tag)

lists:
<ul> = unordered (bullets)
<ol> = ordered (numbers)
<li> = list item, goes inside ul or ol

nest tags properly!! indent to keep track


HW due wk2:
- recipe.md w markdown formatting
- index.html w recipe card (photo, desc, ingredients, steps)
- push to own repo not the class one
- add github link to the class roster sheet


==============================================
WEEK 2
==============================================

tuesday forms

forms, collect data from users
<form action="script.php" method="POST" name="myForm">
  inputs go in here
</form>

action = wheredata goes
method = GET or POST
  GET = data goes in the URL (BAD for passwords, its visible!!)
  POST = data is hidden, like a sealed envelope. use this

input types:
text, password, email, number, date, checkbox, radio, range, submit, button, reset

<label for="name">Name</label>
<input type="text" name="name" placeholder="enter name" maxlength="20">

label + input are INLINE (dont start new line)
p and div are BLOCK (start new line, take full width)

textarea = multiline text box
select + option = dropdown

value on submit = button text



HW due wk3:
w3schools tutorials on html elements, attributes, headings, lists, forms etc


==============================================
WEEK 3
==============================================

info architecture --

IA = how info is organized across WHOLE site not just one page
sitemap = diagram showing how user navigates, first thing u show client
helps everyone plan (devs, designers, clients)



wireframes --

UX = user experience = someone's feeling and succcess using ur product
wireframe = skeletal layout of a page, boxes and labels NO color no images
used for: client approval, user testing, giving devs + designers a guide

semantic html tags (html5):
header, nav, main, section, article, aside, footer, figure
these DESCRIBE their content unlike div/span which say nothing

div = generic box (block)
span = generic inline thing (for grabbing part of text)

links + directories --

two ways to set up a site:
flat - about.html, contact.html all in same folder
folders - about/index.html, contact/index.html

browser always opens index.html in a folder by default

relative links:
same folder: href="about.html"
go into subfolder: href="about/"
go up a level: href="../"
go up then into diff folder: href="../contact/"


css intro --

syntax: selector { property: value; }

3 ways to add css:
inline (on the element) > internal (style tag in head) > external (linked .css file)
external is best practice, inline overrides everything

selector types:
h1 { } = tag selector, hits ALL h1s
.classname { } = class, reusable
#idname { } = id, one element only
h1, h2 { } = grouping
* { } = universal (usually for resetting margins)
h1 em { } = descendant (em inside h1 only)

colors: keyword (red), hex (#ff0000), rgb(255,0,0)


box model --

margin (outside) > border > padding > content (inside)
margin = space outside, doesnt add to element size
padding = space inside, DOES add to size so do the math
border also adds to size

float: left to stack block elements sideways (old way)
floats can break the parent container collapsing
fix w clearfix:
.clearfix::after { display: block; clear: both; content: " "; }

margin: 0 auto = centers a block element


HW due wk4:
- sitemap/IA diagram of a real recipe site
- wireframe for a recipe page
- semantic html version of ur recipe based on wireframe


==============================================
WEEK 4
==============================================

positioning --

static = default
relative = offset from where it normally sits (still takes up space)
absolute = totally removed from flow, positioned relative to nearest positioned parent
fixed = stays put when scrolling (navbars, footers)

top/left/right/bottom only work if position is set (not static)

put absolute inside relative to position a child within a parent box

transforms --

2d: translate(x,y), rotate(45deg), scale(2), skew()
3d: rotateX(), rotateY(), rotateZ()

transitions = smooth change between styles
transition: background 2s;
use :hover to trigger it
can add timing (ease, linear) and delay

flexbox --

1D layout (row OR column, not both)
display: flex on the CONTAINER
direction, justify-content, align-items, flex-wrap, gap
css tricks flexbox guide is the best reference honestly

*****media queries --

styles that only apply when conditions are true (usually screen width)

@media (max-width: 768px) {
  stuff for mobile
}

mobile first = small styles first, then add bigger w min-width
desktop first = big styles first, subtract w max-width
ORDER MATTERS for mobile first!!

common breakpoints: 320, 480, 768, 960, 1024, 1280px

can combine: @media only screen and (min-width: 768px) and (max-width: 1024px)
can hide things: display: none at certain sizes


HW due wk5:
midterm proposal stuff
concept, inspo, wireframe, sitemap
present thursday wk5


==============================================
WEEK 5
==============================================

midterm proposals

15th in order for section D

- concept/theme
- inspo site
- wireframe + sitemap
- list of skills needed


==============================================
WEEK 6
==============================================



css only dropdown nav (no js needed)
gallery layout exercise

midterm checklist:
- at least 1 media query
- if only one use max-width: 768px for mobile
- prof WILL resize ur screen during demo
- can show/hide different content at diff sizes

some stuff u can use for midterm (tutorials on w3schools):
- slideshow (needs js)
- fullscreen video bg
- css flip card
- scroll to content



==============================================
WEEK 7
==============================================

media queries again, deeper

modals w pure css!! no js
uses the :target selector or checkbox hack
just hide/show stuff on click

portfolio layout demo --
jumbotron hero section
gallery grid
hover effects w transforms
bw to color on hover using css layers



midterm deadline stuff:
present thurs wk8 for +5 bonus pts
OR tuesday wk9 (march 24) regular
code graded fri march 27 so u have time to keep working after ur presentation
need in repo: demo, a code snippet u figured out, 1+ media query, next steps


==============================================
WEEK 8
==============================================

css variables --

define: --my-color: #ff0000;
use: color: var(--my-color);
usually put on :root { } for global

good for color themes - change variable, updates everywhere
can swap whole themes by applying diff IDs to body

wired form to formspree (free, need account)

github pages = free static site hosting
push code to repo, enable pages in settings, done

***preferred cloudflare for domain, DNS, and pages/workers

photoshop stuff --
crop tool for batch resizing images (slideshows etc)

image formats for web:
GIF = logos, few colors, animated
JPEG = photos, lots of colors
PNG8 = sometimes better than jpeg
PNG24 = use when u need transparent bg

***keep file sizes small!!

vector shapes as clipping masks = block out layout w shapes then link photos
layer masks = toggle bw b&w and color (thats the hover effect in the gallery)
slice tool = name + save multiple images at once from a big psd file


==============================================
WEEK 9
==============================================

tuesday = midterm presentations
Maceo = 13th in order section D


JS arrays --

array = list of values in one variable
var colors = ["red", "blue", "green"]

.length = how many items
.pop() = remove + return last item
.push(thing) = add to end

access by index:
colors[0] = "red"
STARTS AT 0 NOT 1

for loop:
for (var i = 0; i < arr.length; i++) {
  do stuff w arr[i]
}

can loop backwards too (useful when deleting from array)


JS math --

integers = whole numbers
floats = decimals

operators: + - * / %
% = modulo = returns remainder (good for every nth thing)

x++ = increment by 1
x += 5 = add 5
y-- = decrement
y -= 5 = subtract 5

Math.floor() = round down
Math.ceil() = round up
Math.round() = nearest whole num
Math.random() = random float between 0 and 1

random int in range:
Math.round(Math.random() * (max - min) + min)


CSS grid --

2D layout (rows AND columns)
flexbox = 1D, grid = 2D, use both

display: grid on container
grid-template-columns: 1fr 1fr 1fr or repeat(3, 1fr)
fr = fraction of available space

gap = space between cells

grid-template-areas = name your layout visually in css
grid-area: name = assign element to that area
spanning:
grid-column: span 2 = take up 2 cols
grid-row: span 2 = take up 2 rows
grid-column: 1 / -1 = stretch all the way across

responsive w no media queries:
repeat(auto-f
it, minmax(250px, 1fr))
columns collapse automatically as screen shrinks


==============================================
WEEK 10
==============================================

js objects self guided


JS objects --

JS is object based, everything is kind of an object
arrays, Math, the DOM window = all objects
everytime u do .length or Math.random() ur accessing an object

object = collection of key:value pairs
if the value is a function its called a METHOD

const person = {
  name: "alex",
  age: 22,
  isStudent: true
}

dot notation: person.name
bracket notation: person["name"]
use bracket when key is stored in a variable

update: person.age = 23
add new prop: person.city = "nyc"
delete: delete person.age

const doesnt freeze object!! can still change properties
just cant reassign the whole thing

Object.keys(obj) = array of all keys
Object.values(obj) = array of all values
Object.entries(obj) = array of [key, val] pairs


JSON --

JS Object Notation
same as js object but ALL keys need double quotes
any language can use it, thats why APIs send it

.json() = converts fetch response FROM json to js object
JSON.stringify(obj) = js object TO json string
JSON.parse(str) = json string TO js object


fetch + async/await --

fetch("url") = make a request to an API

problem: js runs line by line super fast, api takes time
without async/await u get null/undefined bc js moved on already

async before function = flags it as async
await before the thing that takes time = wait for it

async function getData() {
  const response = await fetch("https://some.api/endpoint")
  const result = await response.json()
  console.log(result)
}

DOMContentLoaded = wait for html to load b4 grabbing elements

.then() = runs a callback after promise resolves
arrow functions: (x) => { return x + 1 } or x => x + 1
destructuring: const { name, age } = person
template literals: `hello ${name}!` (backticks not quotes)

APIs to mess around with:
randomuser.me/api
rickandmortyapi.com/api/character/1
api.quotable.io/quotes/random