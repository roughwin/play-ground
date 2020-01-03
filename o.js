export default (binding) => {
  function unreachable() {
    throw new Error('Unreachable');
  }
  
  const BLOB_0 = [
    /* 'h' */ 0x68, /* 'e' */ 0x65, /* 'l' */ 0x6c, /* 'l' */ 0x6c,
    /* 'o' */ 0x6f
  ];
  
  const SEQUENCE_COMPLETE = 0;
  const SEQUENCE_PAUSE = 1;
  const SEQUENCE_MISMATCH = 2;
  
  const S_ERROR = 0;
  const S_N_MYFSM__N_ERROR = 1;
  const S_N_MYFSM__N_INVOKE_ONMATCH = 2;
  const S_N_MYFSM__N_ERROR_1 = 3;
  const S_N_MYFSM__N_START = 4;
  
  const onMatch = binding.onMatch;
  
  class Parser {
    constructor() {
      this._index = 0;
      this._current = S_N_MYFSM__N_START;
      this._status = 0;
      this.error = 0;
      this.reason = null;
      this.errorOff = 0;
    }
  
    _match_sequence_id(buf, off, seq) {
      let index = this._index;
      for (; off !== buf.length; off++) {
        const current = buf[off];
        if (current === seq[index]) {
          if (++index === seq.length) {
            this._index = 0;
            this._status = SEQUENCE_COMPLETE;
            return off;
          }
        } else {
          this._index = 0;
          this._status = SEQUENCE_MISMATCH;
          return off;
        }
      }
      this._index = index;
      this._status = SEQUENCE_PAUSE;
      return off;
    }
    
    _onMatch(buf, off) {
      return onMatch(this, buf, off);
    }
    
    _run(current, buf, off) {
      let match;
      for (;;) {
        switch (current | 0) {
          case S_N_MYFSM__N_ERROR: {
            this.error = 0x1;
            this.reason = "onMatch error";
            this.errorOff = off;
            this._current = S_ERROR;
            return S_ERROR;
            unreachable();
          }
          case S_N_MYFSM__N_INVOKE_ONMATCH: {
            switch (this._onMatch(buf, off) | 0) {
              case 0:
                current = S_N_MYFSM__N_START;
                continue;
              default:
                current = S_N_MYFSM__N_ERROR;
                continue;
            }
            unreachable();
          }
          case S_N_MYFSM__N_ERROR_1: {
            this.error = 0x1;
            this.reason = "expect \"hello\"";
            this.errorOff = off;
            this._current = S_ERROR;
            return S_ERROR;
            unreachable();
          }
          case S_N_MYFSM__N_START: {
            if (off === buf.length) {
              return S_N_MYFSM__N_START;
            }
            off = this._match_sequence_id(buf, off, BLOB_0);
            const status = this._status;
            if (status === SEQUENCE_COMPLETE) {
              off++;
              current = S_N_MYFSM__N_INVOKE_ONMATCH;
              continue;
            } else if (status === SEQUENCE_PAUSE) {
              return S_N_MYFSM__N_START;
            } else {
              current = S_N_MYFSM__N_ERROR_1;
              continue;
            }
            unreachable();
          }
        }
      }
      unreachable();
    }
  
    execute(buf) {
      // check lingering errors
      if (this.error !== 0) {
        return this.error;
      }
  
      const next = this._run(this._current, buf, 0);
      if (next === S_ERROR) {
        return this.error;
      }
      this._current = next;
  
      return 0;
    }
  }
  
  return Parser;
};