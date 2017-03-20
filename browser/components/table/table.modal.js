module.exports = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)',
    zIndex            : 2
  },
    content : {
    position                   : 'absolute',
    top                        : '10vw',
    left                       : '10vw',
    right                      : '10vw',
    bottom                     : '10vw',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    zIndex                     : 3
  }
}

