#include <stdio.h>

int main(){
    int a,b;
    printf("please enter the first number\n");
    scanf("%d",&a);
    printf("please enter the second number");
    scanf("%d",&b);

    if(b%a == 0)
        printf("Yes it is a multiple");
    else
        printf("Nope it is not a multiple");
    return 0;
}
