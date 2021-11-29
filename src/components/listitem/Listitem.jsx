import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./Listitem.scss"

export default function Listitem({index}) {
    const [isHoverd,setIsHoverd] =useState(false);
    const trailer =
    return (
       
        <div className="ListItem" 
        style={{left:isHoverd && index *225-50 +index*2.5}}
        onMouseEnter={()=>setIsHoverd(true)} onMouseLeave={()=>setIsHoverd(false)}>
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
      
      <div className="itemInfo">
          <div className="icons">
              <PlayArrow/>
              <Add/>
              <ThumbUpAltOutlined/>
              <ThumbDownOutlined/>
          </div>
          <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">18+</span>
              <span>1999</span>
          </div>
          <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 

          </div>
          <div className="genre">Action</div>
          </div> 
     </div>
    )
}
