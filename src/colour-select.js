import React from 'react';

function ColourSelect({ changeColour, getColourName, original }) {
  const colours = [
    {
      name: 'yellow',
      hex: 'ffff00'
    },
    {
      name: 'indigo',
      hex: '4b0082'
    },
    {
      name: 'original',
      hex: original
    }
  ];

  function applyColour(e, colour, original) {
    e.preventDefault();
    changeColour(`e_replace_color:${colour}:10:${original}`);
  }

  function getColour(e, colour) {
    return getColourName(colour.name);
  }

  return (
    <div>
      <p>Select a colour</p>
      <ul>
        {colours.map(colour => {
          return (
            <li
              key={colour.hex}
              value={colour.hex}
              onClick={e => {
                applyColour(e, colour.hex, original);
                getColour(e, colour);
              }}
            >
              <span
                className="cursor-pointer inline-block px-6 py-2 rounded-full m-1 text-black-800"
                style={{
                  backgroundColor: '#' + colour.hex,
                  padding: '20px',
                  marginTop: '20px',
                  borderRadius: '25px',
                  width: '20px',
                  height: '20px',
                  display: 'inline-block'
                }}
              >
                &nbsp;
              </span>{' '}
              {colour.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColourSelect;
