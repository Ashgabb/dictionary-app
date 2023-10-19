import React from 'react'
import './Definitions.css'

const Definitions = ({word, category, meanings}) => {
  return (
    <div className='meanings'>
      {
        word===""? (
        <span className='subTitle'>Type a word in the search box</span>
        ):(
meanings.map((mean) => mean.meanings.map((item) => (
    item.definitions.map((def) =>(
        <div className='singleDef'>
            <b>{def.definition}</b>
            <hr/>
            {def.definition && (
                    <span>
                        <b>Example: </b>
                        {def.example}
                    </span>
                )}
              
            {def.synonyms && (
                    <span>
                        <b>Synonyms: </b>
                        {def.synonyms.map((s) => `${s}, `)}
                    </span>
                )}
        </div>
    ))
)))
        )}
    </div>
  );
};

export default Definitions
