**Users**

|K|Field|Type|
|:---:|:---|:---|
|(PK)|id|BigInteger|
|(N)|name|VarChar(255)|
|(U)|email|VarChar(255)|
||password_hash|VarChar(255)|
||role|Enum|
||status|Enum|

**Projects**

|K|Field|Type|
|:---:|:---|:---|
|(PK)|id|BigInteger|
||name|VarChar(255)|
|(N)|description|Text|
||status|Enum|
|(FK)|user_id|BigInteger|

**Tasks**

|K|Field|Type|
|:---:|:---|:---|
|(PK)|id|BigInteger|
|(N)|due_date|DateTime|
|(N)|effort|Integer|
||title|VarChar(255)|
|(N)|description|Text|
||order|Integer|
||status|Enum|
|(N)|path|VarChar(255)|
|(N)|folder|VarChar(255)|
|(N)|type|VarChar(255)|
|(N)|filename|VarChar(255)|
|(N)|size|VarChar(255)|
|(FK,N)|user_id|BigInteger|
|(FK)|project_id|BigInteger|
