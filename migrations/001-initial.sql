--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE incident (
  id   INTEGER PRIMARY KEY,
  date INTEGER NOT NULL,
  enter TIMESTAMP NOT NULL,
  exit TIMESTAMP,
  shiftlength INTEGER NOT NULL
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE incident;
