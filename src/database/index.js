import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tdotest.db');

db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  console.log('Foreign keys turned on')
);

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        `CREATE TABLE IF NOT EXISTS lists (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL);

          CREATE TABLE todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            lists_id INTEGER NOT NULL
            FOREIGN KEY (lists_id) REFERENCES lists(id)
           );
        `,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const hasAnyListName = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        'SELECT COUNT(*) FROM lists',
        [],
        (_, success) => {
          resolve(success);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const insertDefaultValueIntoList = (name) => {
  const promise = new Promise((resolve, reject) => {
    hasAnyListName()
      .then(({ rows: { _array } }) => {
        const numberOfRows = _array[0];
        if (numberOfRows['COUNT(*)'] !== 0) {
          resolve();
        } else {
          db.transaction((trx) => {
            trx.executeSql(
              'INSERT INTO lists (name) VALUES (?)',
              [name],
              (_, success) => {
                resolve(success);
              },
              (_, error) => {
                reject(error);
              }
            );
          });
        }
      })
      .catch((error) => reject(error));
  });
  return promise;
};

export const selectAllLists = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        'SELECT * FROM lists',
        [],
        (_, success) => {
          resolve(success);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const insertIntoTodo = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        'INSERT INTO todos (name,lists_id) VALUES (?, ?)',
        ['Walk the dog', 1],
        (_, success) => {
          resolve(success);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const selectAllTodos = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        'SELECT * FROM todos',
        [],
        (_, success) => {
          resolve(success);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};
