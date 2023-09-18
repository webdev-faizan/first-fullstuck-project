/* 
css frame work mean basic se css kar ka 1 file ma dal de jaya tu us ko frame work khaty ha
css framwork under vo chari cheza melti ha jo lak bak her website ma used hoti ha
fater and work easier
easilt created responsive web layout
save time
 consistent design
 easy to use






here we will start boostrap
CDN content delivery content network
boostrap min.js / min.css used it
img-fluid is used to responive img



boostrap grid system
(1)
Breakpoint  class infix Dimension
X-small     -          0px-575px        [col-*]
small       sm          576px-767px     [col-sm*]
medium      md            768px-991px   [col-md*]
large       lg             992px-1199px [col-l*]
extra large xl              1200px-1399px   [col-xl*]
etra extra large xxl        =>1400px        [col-xxl*] (maximum col==12)

device width cathegaries

(2)
contanier
wrapper that contain the website, webiste width depends on wrapper width
Row
row is a div which contain column
div with column class must be in a row parent col div cannot a col div
when you every define a div with row class it divide that div in 12 columns
if we used class='row' the container items can be dived 12 coloumns
column=grid
12 column contain
col-8 and col-4 it work like span

row parent container and must be column parent row


boostrap flow

container<row<coloumn<content

there are three type of contanier
1)      contanier-fluid
give width 100% for all device
2) container use bostrap doc
col-auto is used to the the item resize the width with on text
col-md-auto
row-cols-3  is used to how many in one line


note: if we set col-lg-6 the upper device may width col-lg-6 and below device automatically col-lg-12
row width is equal to parent width




 

other class

color:white ==text-white


aligment it boostrap

align-items-center/end/strat



flex in boostrap
d-flex
order-lg-1
if we have not set order at any one it come frist
align-self-strat/end/center
horizental align  justify-content-start/end/center/between/around/evenly



offsetting columns
ofset mean give space from left side
offset-1/ offset-lg-1 it apply greater than lg

col-xs-offset-9


here end grid system




text align

text-center/end/start

image responsive

img-fluid

border radius

rounded


table
note used to responsive table scroll
use reference

form



boxsizing
mt-3
mb-3


border property

border-warning"
table-border







carasol

inside carasol the active class show frist

dropdown-divider is ued to divide the items



navbar color change
class='navbar-dark bg-dark'
btn-outline-success is used to hover effect

navbar

class='navbar fixed-bottom fixed-top'


border

border-0
border-top-*
border-bottom-*
border-start-*
border-end-*
border-primary

border-radius
rounded-4
rounded-top
rounded-bottom
rounded-start
rounded-end
rounded-circle
rounded-pill




display property

dispaly-none        d-none, d-sm-none d-md-block
display-inline              d-inline
display-inlineblock
display-block               d-block
display-grid
d-grid
gap-3
display-table
display-cell
display-table-row
display-flex
 
d-flex
d-sm-flex
flex-row
flex-row-reverse
flex-column

display-inline-flex




float

float:left==foat-start
float:right==foat-end

float-sm-start
float-none



overflow class

overflow-auto
overflow-hidden
overflow-visible
overflow-scroll




position

position-absolute
position-static
position-fixed
position-sticky

top-0
start-50
end-100
bottom



margin

m-t-*
m-s-*
m-e-*
m-b-*
m-x-*
m-y-*
m-*


padding

(1==.25 2==.6)

p-t-*
p-s-*
p-e-*
p-b-*
p-x-*
p-y-*
p-*




*/
