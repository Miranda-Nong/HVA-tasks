function isPrime(n)
{
    if(n==0 || n==1)
        return 0;
    for(var i=2;i<n;i++){
        if(n%i==0)
            return 0;
    }
    return 1;
      
}
var N = 545;
  for(var i = 1; i <= N; i++)
  {
      if(isPrime(i)) {
        console.log( i );
      }
    }