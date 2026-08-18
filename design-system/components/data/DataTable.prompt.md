Tabular data inside a Card with `padding={0}`.

```jsx
<DataTable columns={[{key:'ref',header:'Report'},{key:'status',header:'Status',render:r => <StatusPill status={r.status} size="sm" />}]} rows={rows} />
```
